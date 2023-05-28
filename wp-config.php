<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'test_bd' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'L,gH.1DG{)VdnveeaD8c/2m{=Zj+$sptOw3)fcrJ!Llh3C$-=XN= Y_QUWR[1xnE' );
define( 'SECURE_AUTH_KEY',  '}It)8v#7)?Bv}*B&n{0|e6a2~HXC!uFVo5_QSP]}NP#tQx:h^d.y8O;n8c_T$6bH' );
define( 'LOGGED_IN_KEY',    '92UA/%wI__,;W^P{bD;R]hdhf$!EWxy;*9Yd.R4C4;*{zqKV!w3_vmDoQvh_WbuD' );
define( 'NONCE_KEY',        'p!OkchM;!$tBn}la+n{Ne#%;y7x1yT.]bTeiCmD#O]yL|.CF0r!7w$;Zu,m]0#&(' );
define( 'AUTH_SALT',        'n=v+;Dx^N:-tAn8HLX{+R<fP##*!d*9Sbf8B1l?v*f3UbEbk/)dObpBQ/&$Wioay' );
define( 'SECURE_AUTH_SALT', 'wpqNy(!:PL!g>62,IxjX]ai9~rps<:G$P1hxTku`zBXkWHGos}%n6lF8`$ |g4^y' );
define( 'LOGGED_IN_SALT',   'l+7$mwp~PK8J]@lnYF( .CtSixI[8iO,|:)Upw-UrZZf]T(,cX]<UB=giK<]!z&y' );
define( 'NONCE_SALT',       'W@ThH+YKz9L@B^G{)`r=0Q=TI+9WO*w^DXLH.;}s/](2o:w88?vW1)Xv=uqqq_IV' );
define('JWT_AUTH_SECRET_KEY', 'eo5 1-([-oD>u~yh<TSUXYv!V3+rw/r|^H8!!7/[-_0{y%+$boQW<eN^&334/`Iw');
/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/cjs",
        "raw": "\"package/cjs\"",
        "start": 40,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "start": 62,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/mjs",
        "raw": "\"package/mjs\"",
        "start": 76,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "start": 98,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package",
        "raw": "\"package\"",
        "start": 113,
        "end": 122
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 127
      },
      "directive": null,
      "start": 124,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 132
      },
      "directive": null,
      "start": 129,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 138
      },
      "directive": null,
      "start": 134,
      "end": 139
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 156
          },
          "start": 147,
          "end": 156
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/a",
        "raw": "\"inner/a\"",
        "start": 162,
        "end": 171
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 140,
      "end": 172
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 189
          },
          "start": 180,
          "end": 189
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/b",
        "raw": "\"inner/b\"",
        "start": 195,
        "end": 204
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 173,
      "end": 205
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 223
          },
          "start": 213,
          "end": 223
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 229,
        "end": 236
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 206,
      "end": 237
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 252
          },
          "start": 245,
          "end": 252
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/types",
        "raw": "\"inner/types\"",
        "start": 258,
        "end": 271
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 238,
      "end": 272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "cjsi",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 277
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 287
        },
        "optional": false,
        "computed": false,
        "start": 273,
        "end": 287
      },
      "directive": null,
      "start": 273,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsi",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 293
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 303
        },
        "optional": false,
        "computed": false,
        "start": 289,
        "end": 303
      },
      "directive": null,
      "start": 289,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "typei",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 310
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 320
        },
        "optional": false,
        "computed": false,
        "start": 305,
        "end": 320
      },
      "directive": null,
      "start": 305,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ts",
          "optional": false,
          "typeAnnotation": null,
          "start": 322,
          "end": 324
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 334
        },
        "optional": false,
        "computed": false,
        "start": 322,
        "end": 334
      },
      "directive": null,
      "start": 322,
      "end": 335
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 335
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/cjs",
        "raw": "\"package/cjs\"",
        "start": 40,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "start": 62,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/mjs",
        "raw": "\"package/mjs\"",
        "start": 76,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "start": 98,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package",
        "raw": "\"package\"",
        "start": 113,
        "end": 122
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 127
      },
      "directive": null,
      "start": 124,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 132
      },
      "directive": null,
      "start": 129,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 138
      },
      "directive": null,
      "start": 134,
      "end": 139
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 156
          },
          "start": 147,
          "end": 156
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/a",
        "raw": "\"inner/a\"",
        "start": 162,
        "end": 171
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 140,
      "end": 172
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 189
          },
          "start": 180,
          "end": 189
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/b",
        "raw": "\"inner/b\"",
        "start": 195,
        "end": 204
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 173,
      "end": 205
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 223
          },
          "start": 213,
          "end": 223
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 229,
        "end": 236
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 206,
      "end": 237
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 252
          },
          "start": 245,
          "end": 252
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/types",
        "raw": "\"inner/types\"",
        "start": 258,
        "end": 271
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 238,
      "end": 272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "cjsi",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 277
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 287
        },
        "optional": false,
        "computed": false,
        "start": 273,
        "end": 287
      },
      "directive": null,
      "start": 273,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsi",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 293
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 303
        },
        "optional": false,
        "computed": false,
        "start": 289,
        "end": 303
      },
      "directive": null,
      "start": 289,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "typei",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 310
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 320
        },
        "optional": false,
        "computed": false,
        "start": 305,
        "end": 320
      },
      "directive": null,
      "start": 305,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ts",
          "optional": false,
          "typeAnnotation": null,
          "start": 322,
          "end": 324
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 334
        },
        "optional": false,
        "computed": false,
        "start": 322,
        "end": 334
      },
      "directive": null,
      "start": 322,
      "end": 335
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 335
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/cjs",
        "raw": "\"package/cjs\"",
        "start": 40,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "start": 62,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/mjs",
        "raw": "\"package/mjs\"",
        "start": 76,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "start": 98,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package",
        "raw": "\"package\"",
        "start": 113,
        "end": 122
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 127
      },
      "directive": null,
      "start": 124,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 132
      },
      "directive": null,
      "start": 129,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 138
      },
      "directive": null,
      "start": 134,
      "end": 139
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 156
          },
          "start": 147,
          "end": 156
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/a",
        "raw": "\"inner/a\"",
        "start": 162,
        "end": 171
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 140,
      "end": 172
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 189
          },
          "start": 180,
          "end": 189
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/b",
        "raw": "\"inner/b\"",
        "start": 195,
        "end": 204
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 173,
      "end": 205
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 223
          },
          "start": 213,
          "end": 223
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 229,
        "end": 236
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 206,
      "end": 237
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 252
          },
          "start": 245,
          "end": 252
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/types",
        "raw": "\"inner/types\"",
        "start": 258,
        "end": 271
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 238,
      "end": 272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "cjsi",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 277
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "cjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 287
        },
        "optional": false,
        "computed": false,
        "start": 273,
        "end": 287
      },
      "directive": null,
      "start": 273,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsi",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 293
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "cjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 303
        },
        "optional": false,
        "computed": false,
        "start": 289,
        "end": 303
      },
      "directive": null,
      "start": 289,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "typei",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 310
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "implicitCjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 328
        },
        "optional": false,
        "computed": false,
        "start": 305,
        "end": 328
      },
      "directive": null,
      "start": 305,
      "end": 329
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ts",
          "optional": false,
          "typeAnnotation": null,
          "start": 330,
          "end": 332
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "cjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 333,
          "end": 342
        },
        "optional": false,
        "computed": false,
        "start": 330,
        "end": 342
      },
      "directive": null,
      "start": 330,
      "end": 343
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 343
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "implicitCjsSource",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 49
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 52,
              "end": 56
            },
            "definite": false,
            "start": 32,
            "end": 56
          }
        ],
        "declare": false,
        "start": 26,
        "end": 57
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 57
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 57
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/a",
        "raw": "\"inner/a\"",
        "start": 40,
        "end": 49
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 66
          },
          "start": 58,
          "end": 66
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/b",
        "raw": "\"inner/b\"",
        "start": 72,
        "end": 81
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 82
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 99
          },
          "start": 90,
          "end": 99
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 105,
        "end": 112
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 83,
      "end": 113
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 128
          },
          "start": 121,
          "end": 128
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/types",
        "raw": "\"inner/types\"",
        "start": 134,
        "end": 147
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 114,
      "end": 148
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 161
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 161
          },
          "exportKind": "value",
          "start": 158,
          "end": 161
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 149,
      "end": 164
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 177
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 177
          },
          "exportKind": "value",
          "start": 174,
          "end": 177
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 165,
      "end": 180
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 194
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 194
          },
          "exportKind": "value",
          "start": 190,
          "end": 194
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 181,
      "end": 197
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "exportKind": "value",
          "start": 207,
          "end": 209
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 198,
      "end": 212
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 212
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjsSource",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 41
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 44,
              "end": 48
            },
            "definite": false,
            "start": 32,
            "end": 48
          }
        ],
        "declare": false,
        "start": 26,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 49
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/a",
        "raw": "\"inner/a\"",
        "start": 40,
        "end": 49
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 66
          },
          "start": 58,
          "end": 66
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/b",
        "raw": "\"inner/b\"",
        "start": 72,
        "end": 81
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 82
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 99
          },
          "start": 90,
          "end": 99
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 105,
        "end": 112
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 83,
      "end": 113
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 128
          },
          "start": 121,
          "end": 128
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/types",
        "raw": "\"inner/types\"",
        "start": 134,
        "end": 147
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 114,
      "end": 148
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 161
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 161
          },
          "exportKind": "value",
          "start": 158,
          "end": 161
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 149,
      "end": 164
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 177
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 177
          },
          "exportKind": "value",
          "start": 174,
          "end": 177
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 165,
      "end": 180
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 194
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 194
          },
          "exportKind": "value",
          "start": 190,
          "end": 194
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 181,
      "end": 197
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "exportKind": "value",
          "start": 207,
          "end": 209
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 198,
      "end": 212
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 212
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsSource",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 41
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 44,
              "end": 48
            },
            "definite": false,
            "start": 32,
            "end": 48
          }
        ],
        "declare": false,
        "start": 26,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 49
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/a",
        "raw": "\"inner/a\"",
        "start": 40,
        "end": 49
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 66
          },
          "start": 58,
          "end": 66
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/b",
        "raw": "\"inner/b\"",
        "start": 72,
        "end": 81
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 82
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 99
          },
          "start": 90,
          "end": 99
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 105,
        "end": 112
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 83,
      "end": 113
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 128
          },
          "start": 121,
          "end": 128
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/types",
        "raw": "\"inner/types\"",
        "start": 134,
        "end": 147
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 114,
      "end": 148
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 161
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 161
          },
          "exportKind": "value",
          "start": 158,
          "end": 161
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 149,
      "end": 164
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 177
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 177
          },
          "exportKind": "value",
          "start": 174,
          "end": 177
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 165,
      "end": 180
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 194
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 194
          },
          "exportKind": "value",
          "start": 190,
          "end": 194
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 181,
      "end": 197
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "exportKind": "value",
          "start": 207,
          "end": 209
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 198,
      "end": 212
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 212
}
```

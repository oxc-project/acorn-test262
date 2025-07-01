__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": "hello",
        "raw": "\"hello\"",
        "start": 15,
        "end": 22
      },
      "exportKind": "value",
      "start": 0,
      "end": 23
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 24
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./t1",
          "raw": "\"./t1\"",
          "start": 19,
          "end": 25
        },
        "start": 11,
        "end": 26
      },
      "importKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 28,
          "end": 29
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 37
        },
        "optional": false,
        "computed": false,
        "start": 28,
        "end": 37
      },
      "directive": null,
      "start": 28,
      "end": 38
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "start": 46,
          "end": 47
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 53,
        "end": 59
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
      },
      "directive": null,
      "start": 61,
      "end": 63
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          "start": 71,
          "end": 77
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 83,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 64,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 92
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 100
        },
        "optional": false,
        "computed": false,
        "start": 91,
        "end": 100
      },
      "directive": null,
      "start": 91,
      "end": 101
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 118
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 123
          },
          "importKind": "value",
          "start": 111,
          "end": 123
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 131,
        "end": 137
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 102,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 140
      },
      "directive": null,
      "start": 139,
      "end": 141
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 151
          },
          "start": 149,
          "end": 151
        },
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 160
          },
          "start": 153,
          "end": 160
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 166,
        "end": 172
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 142,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 176
      },
      "directive": null,
      "start": 174,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "e2",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 180
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 188
        },
        "optional": false,
        "computed": false,
        "start": 178,
        "end": 188
      },
      "directive": null,
      "start": 178,
      "end": 189
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 199
          },
          "start": 197,
          "end": 199
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 210
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 216
          },
          "importKind": "value",
          "start": 203,
          "end": 216
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 224,
        "end": 230
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 190,
      "end": 231
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
      },
      "directive": null,
      "start": 232,
      "end": 235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 238
      },
      "directive": null,
      "start": 236,
      "end": 239
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 247,
        "end": 253
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 240,
      "end": 254
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 255
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./t1",
          "raw": "\"./t1\"",
          "start": 19,
          "end": 25
        },
        "start": 11,
        "end": 26
      },
      "importKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 28,
          "end": 29
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 37
        },
        "optional": false,
        "computed": false,
        "start": 28,
        "end": 37
      },
      "directive": null,
      "start": 28,
      "end": 38
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "start": 46,
          "end": 47
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 53,
        "end": 59
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
      },
      "directive": null,
      "start": 61,
      "end": 63
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          "start": 71,
          "end": 77
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 83,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 64,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 92
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 100
        },
        "optional": false,
        "computed": false,
        "start": 91,
        "end": 100
      },
      "directive": null,
      "start": 91,
      "end": 101
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 118
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 123
          },
          "importKind": "value",
          "start": 111,
          "end": 123
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 131,
        "end": 137
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 102,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 140
      },
      "directive": null,
      "start": 139,
      "end": 141
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 151
          },
          "start": 149,
          "end": 151
        },
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 160
          },
          "start": 153,
          "end": 160
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 166,
        "end": 172
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 142,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 176
      },
      "directive": null,
      "start": 174,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "e2",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 180
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 188
        },
        "optional": false,
        "computed": false,
        "start": 178,
        "end": 188
      },
      "directive": null,
      "start": 178,
      "end": 189
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 199
          },
          "start": 197,
          "end": 199
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 210
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 216
          },
          "importKind": "value",
          "start": 203,
          "end": 216
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 224,
        "end": 230
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 190,
      "end": 231
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
      },
      "directive": null,
      "start": 232,
      "end": 235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 238
      },
      "directive": null,
      "start": 236,
      "end": 239
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 250
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 250
          },
          "exportKind": "value",
          "start": 249,
          "end": 250
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 253
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 253
          },
          "exportKind": "value",
          "start": 252,
          "end": 253
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 256
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 256
          },
          "exportKind": "value",
          "start": 255,
          "end": 256
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 259
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 259
          },
          "exportKind": "value",
          "start": 258,
          "end": 259
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 263
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 263
          },
          "exportKind": "value",
          "start": 261,
          "end": 263
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 267
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 267
          },
          "exportKind": "value",
          "start": 265,
          "end": 267
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 271
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 271
          },
          "exportKind": "value",
          "start": 269,
          "end": 271
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 275
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 275
          },
          "exportKind": "value",
          "start": 273,
          "end": 275
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 240,
      "end": 278
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 278
}
```

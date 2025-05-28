__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "hello",
        "raw": "\"hello\""
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 255,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 26,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 25,
          "value": "./t1",
          "raw": "\"./t1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 38,
      "expression": {
        "type": "MemberExpression",
        "start": 28,
        "end": 37,
        "object": {
          "type": "Identifier",
          "start": 28,
          "end": 29,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 30,
          "end": 37,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 60,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 46,
          "end": 47,
          "local": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 59,
        "value": "./t1",
        "raw": "\"./t1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 63,
      "expression": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 64,
      "end": 90,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 71,
          "end": 77,
          "local": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 83,
        "end": 89,
        "value": "./t1",
        "raw": "\"./t1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 101,
      "expression": {
        "type": "MemberExpression",
        "start": 91,
        "end": 100,
        "object": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 93,
          "end": 100,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 102,
      "end": 138,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 111,
          "end": 123,
          "imported": {
            "type": "Identifier",
            "start": 111,
            "end": 118,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 131,
        "end": 137,
        "value": "./t1",
        "raw": "\"./t1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 141,
      "expression": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 142,
      "end": 173,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 149,
          "end": 151,
          "local": {
            "type": "Identifier",
            "start": 149,
            "end": 151,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportNamespaceSpecifier",
          "start": 153,
          "end": 160,
          "local": {
            "type": "Identifier",
            "start": 158,
            "end": 160,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 166,
        "end": 172,
        "value": "./t1",
        "raw": "\"./t1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 177,
      "expression": {
        "type": "Identifier",
        "start": 174,
        "end": 176,
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 189,
      "expression": {
        "type": "MemberExpression",
        "start": 178,
        "end": 188,
        "object": {
          "type": "Identifier",
          "start": 178,
          "end": 180,
          "decorators": [],
          "name": "e2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 181,
          "end": 188,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 190,
      "end": 231,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 197,
          "end": 199,
          "local": {
            "type": "Identifier",
            "start": 197,
            "end": 199,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 203,
          "end": 216,
          "imported": {
            "type": "Identifier",
            "start": 203,
            "end": 210,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 214,
            "end": 216,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 224,
        "end": 230,
        "value": "./t1",
        "raw": "\"./t1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 235,
      "expression": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 236,
      "end": 239,
      "expression": {
        "type": "Identifier",
        "start": 236,
        "end": 238,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 240,
      "end": 254,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 247,
        "end": 253,
        "value": "./t1",
        "raw": "\"./t1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 278,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 26,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 25,
          "value": "./t1",
          "raw": "\"./t1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 38,
      "expression": {
        "type": "MemberExpression",
        "start": 28,
        "end": 37,
        "object": {
          "type": "Identifier",
          "start": 28,
          "end": 29,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 30,
          "end": 37,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 60,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 46,
          "end": 47,
          "local": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 59,
        "value": "./t1",
        "raw": "\"./t1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 63,
      "expression": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 64,
      "end": 90,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 71,
          "end": 77,
          "local": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 83,
        "end": 89,
        "value": "./t1",
        "raw": "\"./t1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 101,
      "expression": {
        "type": "MemberExpression",
        "start": 91,
        "end": 100,
        "object": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 93,
          "end": 100,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 102,
      "end": 138,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 111,
          "end": 123,
          "imported": {
            "type": "Identifier",
            "start": 111,
            "end": 118,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 131,
        "end": 137,
        "value": "./t1",
        "raw": "\"./t1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 141,
      "expression": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 142,
      "end": 173,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 149,
          "end": 151,
          "local": {
            "type": "Identifier",
            "start": 149,
            "end": 151,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportNamespaceSpecifier",
          "start": 153,
          "end": 160,
          "local": {
            "type": "Identifier",
            "start": 158,
            "end": 160,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 166,
        "end": 172,
        "value": "./t1",
        "raw": "\"./t1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 177,
      "expression": {
        "type": "Identifier",
        "start": 174,
        "end": 176,
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 189,
      "expression": {
        "type": "MemberExpression",
        "start": 178,
        "end": 188,
        "object": {
          "type": "Identifier",
          "start": 178,
          "end": 180,
          "decorators": [],
          "name": "e2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 181,
          "end": 188,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 190,
      "end": 231,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 197,
          "end": 199,
          "local": {
            "type": "Identifier",
            "start": 197,
            "end": 199,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 203,
          "end": 216,
          "imported": {
            "type": "Identifier",
            "start": 203,
            "end": 210,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 214,
            "end": 216,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 224,
        "end": 230,
        "value": "./t1",
        "raw": "\"./t1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 235,
      "expression": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 236,
      "end": 239,
      "expression": {
        "type": "Identifier",
        "start": 236,
        "end": 238,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 240,
      "end": 278,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 249,
          "end": 250,
          "local": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 252,
          "end": 253,
          "local": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 255,
          "end": 256,
          "local": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 258,
          "end": 259,
          "local": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 261,
          "end": 263,
          "local": {
            "type": "Identifier",
            "start": 261,
            "end": 263,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 261,
            "end": 263,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 265,
          "end": 267,
          "local": {
            "type": "Identifier",
            "start": 265,
            "end": 267,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 265,
            "end": 267,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 269,
          "end": 271,
          "local": {
            "type": "Identifier",
            "start": 269,
            "end": 271,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 269,
            "end": 271,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 273,
          "end": 275,
          "local": {
            "type": "Identifier",
            "start": 273,
            "end": 275,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 273,
            "end": 275,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

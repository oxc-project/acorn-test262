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
        "raw": "\"hello\"",
        "value": "hello",
        "regex": null,
        "bigint": null
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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 26,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 25,
          "raw": "\"./t1\"",
          "value": "./t1",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 38,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 28,
        "end": 37,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 28,
          "end": 29,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 30,
          "end": 37,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 60,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 59,
        "raw": "\"./t1\"",
        "value": "./t1",
        "regex": null,
        "bigint": null
      },
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
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 63,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 64,
      "end": 90,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 83,
        "end": 89,
        "raw": "\"./t1\"",
        "value": "./t1",
        "regex": null,
        "bigint": null
      },
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
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 101,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 91,
        "end": 100,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 93,
          "end": 100,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 102,
      "end": 138,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 131,
        "end": 137,
        "raw": "\"./t1\"",
        "value": "./t1",
        "regex": null,
        "bigint": null
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 141,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 142,
      "end": 173,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 166,
        "end": 172,
        "raw": "\"./t1\"",
        "value": "./t1",
        "regex": null,
        "bigint": null
      },
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
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 177,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 174,
        "end": 176,
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 189,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 178,
        "end": 188,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 178,
          "end": 180,
          "decorators": [],
          "name": "e2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 181,
          "end": 188,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 190,
      "end": 231,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 224,
        "end": 230,
        "raw": "\"./t1\"",
        "value": "./t1",
        "regex": null,
        "bigint": null
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 214,
            "end": 216,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 235,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 236,
      "end": 239,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 236,
        "end": 238,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 240,
      "end": 254,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 247,
        "end": 253,
        "raw": "\"./t1\"",
        "value": "./t1",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 26,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 25,
          "raw": "\"./t1\"",
          "value": "./t1",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 38,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 28,
        "end": 37,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 28,
          "end": 29,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 30,
          "end": 37,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 60,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 59,
        "raw": "\"./t1\"",
        "value": "./t1",
        "regex": null,
        "bigint": null
      },
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
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 63,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 64,
      "end": 90,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 83,
        "end": 89,
        "raw": "\"./t1\"",
        "value": "./t1",
        "regex": null,
        "bigint": null
      },
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
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 101,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 91,
        "end": 100,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 93,
          "end": 100,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 102,
      "end": 138,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 131,
        "end": 137,
        "raw": "\"./t1\"",
        "value": "./t1",
        "regex": null,
        "bigint": null
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 141,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 142,
      "end": 173,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 166,
        "end": 172,
        "raw": "\"./t1\"",
        "value": "./t1",
        "regex": null,
        "bigint": null
      },
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
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 177,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 174,
        "end": 176,
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 189,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 178,
        "end": 188,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 178,
          "end": 180,
          "decorators": [],
          "name": "e2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 181,
          "end": 188,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 190,
      "end": 231,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 224,
        "end": 230,
        "raw": "\"./t1\"",
        "value": "./t1",
        "regex": null,
        "bigint": null
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 214,
            "end": 216,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 235,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 236,
      "end": 239,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 236,
        "end": 238,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 240,
      "end": 278,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 249,
          "end": 250,
          "exported": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 252,
          "end": 253,
          "exported": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 255,
          "end": 256,
          "exported": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 258,
          "end": 259,
          "exported": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 261,
          "end": 263,
          "exported": {
            "type": "Identifier",
            "start": 261,
            "end": 263,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 261,
            "end": 263,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 265,
          "end": 267,
          "exported": {
            "type": "Identifier",
            "start": 265,
            "end": 267,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 265,
            "end": 267,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 269,
          "end": 271,
          "exported": {
            "type": "Identifier",
            "start": 269,
            "end": 271,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 269,
            "end": 271,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 273,
          "end": 275,
          "exported": {
            "type": "Identifier",
            "start": 273,
            "end": 275,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 273,
            "end": 275,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

globals.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 46,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "require",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 39,
          "decorators": [],
          "name": "module",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 39,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 33,
              "end": 39
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 40,
        "end": 45,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 42,
          "end": 45
        }
      }
    }
  ],
  "sourceType": "module"
}
```
main.ts
```json
{
  "type": "Program",
  "start": 11,
  "end": 404,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 11,
      "end": 37,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 36,
        "raw": "\"./foo.ts\"",
        "value": "./foo.ts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 38,
      "end": 66,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 65,
        "raw": "\"../foo.mts\"",
        "value": "../foo.mts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 67,
      "end": 98,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 97,
        "raw": "\"../../foo.cts\"",
        "value": "../../foo.cts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 99,
      "end": 126,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 114,
        "end": 125,
        "raw": "\"./foo.tsx\"",
        "value": "./foo.tsx"
      },
      "specifiers": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 127,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 137,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 140,
        "end": 159,
        "expression": {
          "type": "Literal",
          "start": 148,
          "end": 158,
          "raw": "\"./foo.ts\"",
          "value": "./foo.ts"
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 161,
      "end": 179,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 168,
        "end": 178,
        "raw": "\"./foo.ts\"",
        "value": "./foo.ts"
      },
      "specifiers": []
    },
    {
      "type": "ExportAllDeclaration",
      "start": 180,
      "end": 205,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 194,
        "end": 204,
        "raw": "\"./foo.ts\"",
        "value": "./foo.ts"
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 232,
      "expression": {
        "type": "ImportExpression",
        "start": 213,
        "end": 231,
        "options": null,
        "source": {
          "type": "Literal",
          "start": 220,
          "end": 230,
          "raw": "\"./foo.ts\"",
          "value": "./foo.ts"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 267,
      "expression": {
        "type": "CallExpression",
        "start": 233,
        "end": 266,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 257,
            "end": 265,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 263,
              "end": 265,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 233,
          "end": 256,
          "computed": false,
          "object": {
            "type": "ImportExpression",
            "start": 233,
            "end": 251,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 240,
              "end": 250,
              "raw": "\"./foo.ts\"",
              "value": "./foo.ts"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 252,
            "end": 256,
            "decorators": [],
            "name": "then",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 268,
      "end": 299,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 297,
        "end": 299,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 286,
        "decorators": [],
        "name": "acceptAny",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 287,
          "end": 295,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 290,
            "end": 295,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 292,
              "end": 295
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 300,
      "end": 330,
      "expression": {
        "type": "CallExpression",
        "start": 300,
        "end": 329,
        "arguments": [
          {
            "type": "ImportExpression",
            "start": 310,
            "end": 328,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 317,
              "end": 327,
              "raw": "\"./foo.ts\"",
              "value": "./foo.ts"
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 300,
          "end": 309,
          "decorators": [],
          "name": "acceptAny",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 331,
      "end": 379,
      "expression": {
        "type": "ImportExpression",
        "start": 331,
        "end": 378,
        "options": {
          "type": "ObjectExpression",
          "start": 350,
          "end": 377,
          "properties": [
            {
              "type": "Property",
              "start": 352,
              "end": 375,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 352,
                "end": 356,
                "decorators": [],
                "name": "with",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectExpression",
                "start": 358,
                "end": 375,
                "properties": [
                  {
                    "type": "Property",
                    "start": 360,
                    "end": 373,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 364,
                      "decorators": [],
                      "name": "attr",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 366,
                      "end": 373,
                      "raw": "\"value\"",
                      "value": "value"
                    }
                  }
                ]
              }
            }
          ]
        },
        "source": {
          "type": "Literal",
          "start": 338,
          "end": 348,
          "raw": "\"./foo.ts\"",
          "value": "./foo.ts"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 404,
      "expression": {
        "type": "ImportExpression",
        "start": 380,
        "end": 403,
        "options": null,
        "source": {
          "type": "BinaryExpression",
          "start": 387,
          "end": 402,
          "operator": "+",
          "left": {
            "type": "Literal",
            "start": 387,
            "end": 389,
            "raw": "\"\"",
            "value": ""
          },
          "right": {
            "type": "Literal",
            "start": 392,
            "end": 402,
            "raw": "\"./foo.ts\"",
            "value": "./foo.ts"
          }
        }
      }
    }
  ],
  "sourceType": "module"
}
```
no.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 337,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 32,
        "raw": "\"./foo.ts/foo.js\"",
        "value": "./foo.ts/foo.js"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 34,
      "end": 58,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 57,
        "raw": "\"foo.ts\"",
        "value": "foo.ts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 59,
      "end": 87,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 74,
        "end": 86,
        "raw": "\"pkg/foo.ts\"",
        "value": "pkg/foo.ts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 88,
      "end": 113,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 103,
        "end": 112,
        "raw": "\".foo.ts\"",
        "value": ".foo.ts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 114,
      "end": 142,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 129,
        "end": 141,
        "raw": "\"./foo.d.ts\"",
        "value": "./foo.d.ts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 143,
      "end": 172,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 158,
        "end": 171,
        "raw": "\"./foo.d.mts\"",
        "value": "./foo.d.mts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 173,
      "end": 205,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 188,
        "end": 204,
        "raw": "\"./foo.d.css.ts\"",
        "value": "./foo.d.css.ts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 206,
      "end": 240,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 221,
        "end": 239,
        "raw": "\"#internal/foo.ts\"",
        "value": "#internal/foo.ts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 241,
      "end": 270,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 256,
        "end": 269,
        "raw": "\"node:foo.ts\"",
        "value": "node:foo.ts"
      },
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 293,
      "expression": {
        "type": "CallExpression",
        "start": 271,
        "end": 292,
        "arguments": [
          {
            "type": "Literal",
            "start": 281,
            "end": 291,
            "raw": "\"./foo.ts\"",
            "value": "./foo.ts"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 272,
          "end": 279,
          "decorators": [],
          "name": "require",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 294,
      "end": 314,
      "expression": {
        "type": "ImportExpression",
        "start": 294,
        "end": 313,
        "options": null,
        "source": {
          "type": "Literal",
          "start": 301,
          "end": 312,
          "raw": "\"node:path\"",
          "value": "node:path"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 336,
      "expression": {
        "type": "CallExpression",
        "start": 315,
        "end": 335,
        "arguments": [
          {
            "type": "Literal",
            "start": 323,
            "end": 334,
            "raw": "\"node:path\"",
            "value": "node:path"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 315,
          "end": 322,
          "decorators": [],
          "name": "require",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
lol.ts
```json
{
  "type": "Program",
  "start": 136,
  "end": 136,
  "body": [],
  "sourceType": "module"
}
```

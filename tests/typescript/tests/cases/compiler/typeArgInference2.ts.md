__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 436,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 36,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 34,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 58,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 69,
              "end": 73,
              "typeName": {
                "type": "Identifier",
                "start": 69,
                "end": 73,
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 80,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 80,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 79,
              "end": 80,
              "typeName": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 82,
          "end": 87,
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 84,
            "end": 87,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 86,
              "end": 87,
              "typeName": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 88,
        "end": 91,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 90,
          "end": 91,
          "typeName": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 113,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 100,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 103,
            "end": 112,
            "callee": {
              "type": "Identifier",
              "start": 103,
              "end": 106,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 107,
                "end": 111,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 154,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 153,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 145,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 148,
            "end": 153,
            "callee": {
              "type": "Identifier",
              "start": 148,
              "end": 151,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 214,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 213,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "decorators": [],
            "name": "z3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 194,
            "end": 213,
            "callee": {
              "type": "Identifier",
              "start": 194,
              "end": 197,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 198,
                "end": 212,
                "properties": [
                  {
                    "type": "Property",
                    "start": 200,
                    "end": 210,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 204,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 206,
                      "end": 210,
                      "value": null,
                      "raw": "null"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 240,
      "end": 270,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 269,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 246,
            "decorators": [],
            "name": "z4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 249,
            "end": 269,
            "callee": {
              "type": "Identifier",
              "start": 249,
              "end": 252,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 253,
                "end": 268,
                "properties": [
                  {
                    "type": "Property",
                    "start": 255,
                    "end": 266,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 255,
                      "end": 259,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 261,
                      "end": 266,
                      "value": "abc",
                      "raw": "\"abc\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 334,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 333,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 304,
            "decorators": [],
            "name": "z5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 307,
            "end": 333,
            "callee": {
              "type": "Identifier",
              "start": 307,
              "end": 310,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 311,
                "end": 332,
                "properties": [
                  {
                    "type": "Property",
                    "start": 313,
                    "end": 324,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 313,
                      "end": 317,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 319,
                      "end": 324,
                      "value": "abc",
                      "raw": "\"abc\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 326,
                    "end": 330,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 329,
                      "end": 330,
                      "value": 5,
                      "raw": "5"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 367,
      "end": 426,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 425,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 373,
            "decorators": [],
            "name": "z6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 376,
            "end": 425,
            "callee": {
              "type": "Identifier",
              "start": 376,
              "end": 379,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 380,
                "end": 401,
                "properties": [
                  {
                    "type": "Property",
                    "start": 382,
                    "end": 393,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 382,
                      "end": 386,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 388,
                      "end": 393,
                      "value": "abc",
                      "raw": "\"abc\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 395,
                    "end": 399,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 395,
                      "end": 396,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 398,
                      "end": 399,
                      "value": 5,
                      "raw": "5"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 403,
                "end": 424,
                "properties": [
                  {
                    "type": "Property",
                    "start": 405,
                    "end": 416,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 409,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 411,
                      "end": 416,
                      "value": "def",
                      "raw": "\"def\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 418,
                    "end": 422,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 418,
                      "end": 419,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 421,
                      "end": 422,
                      "value": 5,
                      "raw": "5"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

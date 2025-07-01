__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 67
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 82
          },
          "optional": false,
          "computed": false,
          "start": 61,
          "end": 82
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "window",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 89
          },
          {
            "type": "Literal",
            "value": "prop",
            "raw": "\"prop\"",
            "start": 91,
            "end": 97
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 106
                },
                "value": {
                  "type": "Literal",
                  "value": "v1.0.0",
                  "raw": "\"v1.0.0\"",
                  "start": 108,
                  "end": 116
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 101,
                "end": 116
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 126
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 128,
                  "end": 133
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 118,
                "end": 133
              }
            ],
            "start": 99,
            "end": 135
          }
        ],
        "optional": false,
        "start": 61,
        "end": 136
      },
      "directive": null,
      "start": 61,
      "end": 137
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 150
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              },
              "start": 155,
              "end": 163
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 163
          }
        ],
        "start": 151,
        "end": 165
      },
      "declare": false,
      "start": 139,
      "end": 165
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 213,
                    "end": 214
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ThisType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 225
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 226,
                          "end": 229
                        }
                      ],
                      "start": 225,
                      "end": 230
                    },
                    "start": 217,
                    "end": 230
                  }
                ],
                "start": 213,
                "end": 230
              },
              "start": 211,
              "end": 230
            },
            "start": 210,
            "end": 230
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 236
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 238,
                  "end": 240
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 235,
                "end": 240
              }
            ],
            "start": 233,
            "end": 242
          },
          "definite": false,
          "start": 210,
          "end": 242
        }
      ],
      "declare": false,
      "start": 206,
      "end": 243
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Empty",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 260
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 261,
        "end": 263
      },
      "declare": false,
      "start": 245,
      "end": 263
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Empty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 311,
                      "end": 316
                    },
                    "typeArguments": null,
                    "start": 311,
                    "end": 316
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 321,
                          "end": 322
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 324,
                            "end": 330
                          },
                          "start": 322,
                          "end": 330
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 321,
                        "end": 330
                      }
                    ],
                    "start": 319,
                    "end": 332
                  }
                ],
                "start": 311,
                "end": 332
              },
              "start": 309,
              "end": 332
            },
            "start": 308,
            "end": 332
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 338
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 340,
                  "end": 347
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 337,
                "end": 347
              }
            ],
            "start": 335,
            "end": 349
          },
          "definite": false,
          "start": 308,
          "end": 349
        }
      ],
      "declare": false,
      "start": 304,
      "end": 350
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 350
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 61,
  "end": 350,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 61,
        "end": 136,
        "callee": {
          "type": "MemberExpression",
          "start": 61,
          "end": 82,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 67,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 68,
            "end": 82,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 83,
            "end": 89,
            "decorators": [],
            "name": "window",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 91,
            "end": 97,
            "value": "prop",
            "raw": "\"prop\""
          },
          {
            "type": "ObjectExpression",
            "start": 99,
            "end": 135,
            "properties": [
              {
                "type": "Property",
                "start": 101,
                "end": 116,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 106,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 108,
                  "end": 116,
                  "value": "v1.0.0",
                  "raw": "\"v1.0.0\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 118,
                "end": 133,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 126,
                  "decorators": [],
                  "name": "readonly",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 128,
                  "end": 133,
                  "value": false,
                  "raw": "false"
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
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 139,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 150,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 151,
        "end": 165,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 163,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 163,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
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
      "type": "VariableDeclaration",
      "start": 206,
      "end": 243,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 230,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 230,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 213,
                "end": 230,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 213,
                    "end": 214,
                    "typeName": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 217,
                    "end": 230,
                    "typeName": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 225,
                      "decorators": [],
                      "name": "ThisType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 225,
                      "end": 230,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 226,
                          "end": 229
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 233,
            "end": 242,
            "properties": [
              {
                "type": "Property",
                "start": 235,
                "end": 240,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 236,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 238,
                  "end": 240,
                  "value": 10,
                  "raw": "10"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 245,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 260,
        "decorators": [],
        "name": "Empty",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 261,
        "end": 263,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 304,
      "end": 350,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 349,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 332,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 309,
              "end": 332,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 311,
                "end": 332,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 311,
                    "end": 316,
                    "typeName": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 316,
                      "decorators": [],
                      "name": "Empty",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 319,
                    "end": 332,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 321,
                        "end": 330,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 322,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 322,
                          "end": 330,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 324,
                            "end": 330
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 335,
            "end": 349,
            "properties": [
              {
                "type": "Property",
                "start": 337,
                "end": 347,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 338,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 340,
                  "end": 347,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
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

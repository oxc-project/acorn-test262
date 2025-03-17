__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 61,
  "end": 351,
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
            "name": "Object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 68,
            "end": 82,
            "name": "defineProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 83,
            "end": 89,
            "name": "window",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 106,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 108,
                  "end": 116,
                  "value": "v1.0.0",
                  "raw": "\"v1.0.0\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 118,
                "end": 133,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 126,
                  "name": "readonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 128,
                  "end": 133,
                  "value": false,
                  "raw": "false"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 230,
            "name": "a",
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
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "ThisType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 236,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 238,
                  "end": 240,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
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
        "name": "Empty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 349,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 332,
            "name": "x",
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
                      "name": "Empty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 338,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 340,
                  "end": 347,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

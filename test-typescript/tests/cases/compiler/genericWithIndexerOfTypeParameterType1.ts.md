__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "name": "LazyArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 125,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 74,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 40,
              "name": "objects",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "TSTypeAssertion",
              "start": 43,
              "end": 73,
              "expression": {
                "type": "ObjectExpression",
                "start": 71,
                "end": 73,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 44,
                "end": 70,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 46,
                    "end": 68,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 47,
                        "end": 63,
                        "name": "objectId",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 55,
                          "end": 63,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 57,
                            "end": 63
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 67,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 66,
                        "end": 67,
                        "typeName": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 67,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 123,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 84,
              "name": "array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 123,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 123,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 97,
                    "end": 117,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 104,
                      "end": 116,
                      "object": {
                        "type": "ThisExpression",
                        "start": 104,
                        "end": 108
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 116,
                        "name": "objects",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 139,
            "name": "lazyArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 142,
            "end": 165,
            "callee": {
              "type": "Identifier",
              "start": 146,
              "end": 155,
              "name": "LazyArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 155,
              "end": 163,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 156,
                  "end": 162
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 184,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 187,
            "end": 212,
            "object": {
              "type": "CallExpression",
              "start": 187,
              "end": 204,
              "callee": {
                "type": "MemberExpression",
                "start": 187,
                "end": 202,
                "object": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 196,
                  "name": "lazyArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 202,
                  "name": "array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Literal",
              "start": 205,
              "end": 211,
              "value": "test",
              "raw": "\"test\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

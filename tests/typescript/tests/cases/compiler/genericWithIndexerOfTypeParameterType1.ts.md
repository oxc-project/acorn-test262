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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "LazyArray",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 125,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 74,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 40,
              "decorators": [],
              "name": "objects",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "TSTypeAssertion",
              "start": 43,
              "end": 73,
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
                        "decorators": [],
                        "name": "objectId",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 55,
                          "end": 63,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 57,
                            "end": 63
                          }
                        }
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 71,
                "end": 73,
                "properties": []
              }
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 123,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 84,
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 123,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "decorators": [],
                        "name": "objects",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 166,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 139,
            "decorators": [],
            "name": "lazyArray",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 142,
            "end": 165,
            "callee": {
              "type": "Identifier",
              "start": 146,
              "end": 155,
              "decorators": [],
              "name": "LazyArray",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 213,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 184,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              }
            }
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
                  "decorators": [],
                  "name": "lazyArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 202,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 205,
              "end": 211,
              "value": "test",
              "raw": "\"test\""
            },
            "optional": false,
            "computed": true
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

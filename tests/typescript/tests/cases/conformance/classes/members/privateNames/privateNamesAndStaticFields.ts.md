__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 500,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 158,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 158,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 34,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 25,
              "name": "foo"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 39,
            "end": 59,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 46,
              "end": 50,
              "name": "bar"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 58,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 52,
                "end": 58
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 64,
            "end": 156,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 75,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 156,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 156,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 89,
                    "end": 100,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 89,
                      "end": 99,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 89,
                        "end": 95,
                        "object": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 90,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 91,
                          "end": 95,
                          "name": "foo"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 98,
                        "end": 99,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 109,
                    "end": 116,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 109,
                      "end": 115,
                      "object": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 111,
                        "end": 115,
                        "name": "foo"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 134,
                    "end": 141,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 134,
                      "end": 140,
                      "object": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 135,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 136,
                        "end": 140,
                        "name": "bar"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "type": "ClassDeclaration",
      "start": 160,
      "end": 282,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 178,
        "end": 282,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 184,
            "end": 204,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 191,
              "end": 195,
              "name": "foo"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 203,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 197,
                "end": 203
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 280,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 220,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 221,
              "end": 280,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 224,
                "end": 280,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 234,
                    "end": 242,
                    "expression": {
                      "type": "CallExpression",
                      "start": 234,
                      "end": 241,
                      "callee": {
                        "type": "Super",
                        "start": 234,
                        "end": 239
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 251,
                    "end": 274,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 251,
                      "end": 273,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 251,
                        "end": 257,
                        "object": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 252,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 253,
                          "end": 257,
                          "name": "foo"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 260,
                        "end": 273,
                        "value": "some string",
                        "raw": "\"some string\""
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 442,
      "end": 486,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 485,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 474,
            "decorators": [],
            "name": "willErrorSomeDay",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 464,
              "end": 474,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 466,
                "end": 474,
                "exprName": {
                  "type": "Identifier",
                  "start": 473,
                  "end": 474,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ClassExpression",
            "start": 477,
            "end": 485,
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 483,
              "end": 485,
              "body": []
            },
            "abstract": false,
            "declare": false
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

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 501,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 158,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 34,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 25,
              "name": "foo"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 39,
            "end": 59,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 46,
              "end": 50,
              "name": "bar"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 64,
            "end": 156,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 75,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 156,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 91,
                          "end": 95,
                          "name": "foo"
                        },
                        "computed": false,
                        "optional": false
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
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 111,
                        "end": 115,
                        "name": "foo"
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 136,
                        "end": 140,
                        "name": "bar"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 160,
      "end": 282,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 178,
        "end": 282,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 184,
            "end": 204,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 191,
              "end": 195,
              "name": "foo"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 280,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 220,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 221,
              "end": 280,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 253,
                          "end": 257,
                          "name": "foo"
                        },
                        "computed": false,
                        "optional": false
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 485,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 474,
            "name": "willErrorSomeDay",
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 477,
            "end": 485,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 483,
              "end": 485,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

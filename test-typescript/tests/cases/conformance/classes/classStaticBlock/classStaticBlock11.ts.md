__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 9,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 8,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "name": "getX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 10,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 165,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 24,
              "name": "x"
            },
            "value": {
              "type": "Literal",
              "start": 27,
              "end": 28,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 76,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 42,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 76,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 52,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 46,
                      "end": 52
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 76,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 60,
                    "end": 72,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 60,
                      "end": 71,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 60,
                        "end": 67,
                        "object": {
                          "type": "ThisExpression",
                          "start": 60,
                          "end": 64
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 65,
                          "end": 67,
                          "name": "x"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 71,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
          },
          {
            "type": "StaticBlock",
            "start": 80,
            "end": 163,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 133,
                "end": 159,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 133,
                  "end": 158,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 137,
                    "name": "getX",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 140,
                    "end": 158,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 141,
                        "end": 147,
                        "name": "obj",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 144,
                          "end": 147,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 146,
                            "end": 147,
                            "typeName": {
                              "type": "Identifier",
                              "start": 146,
                              "end": 147,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 152,
                      "end": 158,
                      "object": {
                        "type": "Identifier",
                        "start": 152,
                        "end": 155,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 156,
                        "end": 158,
                        "name": "x"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

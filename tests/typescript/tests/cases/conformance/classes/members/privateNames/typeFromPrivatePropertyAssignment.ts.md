__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 11,
        "end": 27,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 13,
            "end": 25,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
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
      "type": "ClassDeclaration",
      "start": 30,
      "end": 152,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 152,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 44,
            "end": 53,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 44,
              "end": 46,
              "name": "a"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 52,
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 52,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 67,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 58,
              "end": 60,
              "name": "b"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 66,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 66,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 150,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 150,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 150,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 87,
                    "end": 111,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 93,
                        "end": 110,
                        "id": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 94,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 97,
                          "end": 110,
                          "left": {
                            "type": "MemberExpression",
                            "start": 97,
                            "end": 104,
                            "object": {
                              "type": "ThisExpression",
                              "start": 97,
                              "end": 101
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 102,
                              "end": 104,
                              "name": "a"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "operator": "||",
                          "right": {
                            "type": "ObjectExpression",
                            "start": 108,
                            "end": 110,
                            "properties": []
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 120,
                    "end": 144,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 120,
                      "end": 143,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 120,
                        "end": 127,
                        "object": {
                          "type": "ThisExpression",
                          "start": 120,
                          "end": 124
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 125,
                          "end": 127,
                          "name": "b"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 130,
                        "end": 143,
                        "left": {
                          "type": "MemberExpression",
                          "start": 130,
                          "end": 137,
                          "object": {
                            "type": "ThisExpression",
                            "start": 130,
                            "end": 134
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 135,
                            "end": 137,
                            "name": "b"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "||",
                        "right": {
                          "type": "ObjectExpression",
                          "start": 141,
                          "end": 143,
                          "properties": []
                        }
                      }
                    },
                    "directive": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

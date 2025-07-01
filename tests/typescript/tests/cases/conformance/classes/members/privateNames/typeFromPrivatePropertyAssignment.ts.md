__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              },
              "start": 17,
              "end": 25
            },
            "accessibility": null,
            "static": false,
            "start": 13,
            "end": 25
          }
        ],
        "start": 11,
        "end": 27
      },
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "a",
              "start": 44,
              "end": 46
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 52
                },
                "typeArguments": null,
                "start": 49,
                "end": 52
              },
              "start": 47,
              "end": 52
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 44,
            "end": 53
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "b",
              "start": 58,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 66
                },
                "typeArguments": null,
                "start": 63,
                "end": 66
              },
              "start": 61,
              "end": 66
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 58,
            "end": 67
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 93,
                          "end": 94
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 97,
                              "end": 101
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "a",
                              "start": 102,
                              "end": 104
                            },
                            "optional": false,
                            "computed": false,
                            "start": 97,
                            "end": 104
                          },
                          "operator": "||",
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 108,
                            "end": 110
                          },
                          "start": 97,
                          "end": 110
                        },
                        "definite": false,
                        "start": 93,
                        "end": 110
                      }
                    ],
                    "declare": false,
                    "start": 87,
                    "end": 111
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 120,
                          "end": 124
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "b",
                          "start": 125,
                          "end": 127
                        },
                        "optional": false,
                        "computed": false,
                        "start": 120,
                        "end": 127
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 130,
                            "end": 134
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "b",
                            "start": 135,
                            "end": 137
                          },
                          "optional": false,
                          "computed": false,
                          "start": 130,
                          "end": 137
                        },
                        "operator": "||",
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 141,
                          "end": 143
                        },
                        "start": 130,
                        "end": 143
                      },
                      "start": 120,
                      "end": 143
                    },
                    "directive": null,
                    "start": 120,
                    "end": 144
                  }
                ],
                "start": 77,
                "end": 150
              },
              "expression": false,
              "start": 74,
              "end": 150
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 73,
            "end": 150
          }
        ],
        "start": 38,
        "end": 152
      },
      "abstract": false,
      "declare": false,
      "start": 30,
      "end": 152
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 152
}
```

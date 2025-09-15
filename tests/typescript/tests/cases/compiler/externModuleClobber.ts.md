__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EM",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Position",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 45
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 46,
                "end": 49
              },
              "abstract": false,
              "declare": false,
              "start": 31,
              "end": 49
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 24,
            "end": 49
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "EC",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 67
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getPosition",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 79,
                      "end": 90
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "EM",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 95,
                              "end": 97
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Position",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 98,
                              "end": 106
                            },
                            "start": 95,
                            "end": 106
                          },
                          "typeArguments": null,
                          "start": 95,
                          "end": 106
                        },
                        "start": 93,
                        "end": 106
                      },
                      "body": null,
                      "expression": false,
                      "start": 90,
                      "end": 107
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 72,
                    "end": 107
                  }
                ],
                "start": 68,
                "end": 110
              },
              "abstract": false,
              "declare": false,
              "start": 59,
              "end": 110
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 52,
            "end": 110
          }
        ],
        "start": 21,
        "end": 112
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 112
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EM",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 122
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Position",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 131
                  },
                  "start": 120,
                  "end": 131
                },
                "typeArguments": null,
                "start": 120,
                "end": 131
              },
              "start": 119,
              "end": 131
            },
            "start": 118,
            "end": 131
          },
          "init": null,
          "definite": false,
          "start": 118,
          "end": 131
        }
      ],
      "declare": false,
      "start": 114,
      "end": 132
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EM",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 142
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 145
                  },
                  "start": 140,
                  "end": 145
                },
                "typeArguments": null,
                "start": 140,
                "end": 145
              },
              "start": 139,
              "end": 145
            },
            "start": 137,
            "end": 145
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "EM",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 154
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "EC",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 157
              },
              "optional": false,
              "computed": false,
              "start": 152,
              "end": 157
            },
            "typeArguments": null,
            "arguments": [],
            "start": 148,
            "end": 159
          },
          "definite": false,
          "start": 137,
          "end": 159
        }
      ],
      "declare": false,
      "start": 133,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 163
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ec",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 168
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getPosition",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 180
            },
            "optional": false,
            "computed": false,
            "start": 166,
            "end": 180
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 166,
          "end": 182
        },
        "start": 162,
        "end": 182
      },
      "directive": null,
      "start": 162,
      "end": 183
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 183
}
```

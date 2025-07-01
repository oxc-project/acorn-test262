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
        "start": 15,
        "end": 17
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
                "start": 34,
                "end": 42
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 43,
                "end": 46
              },
              "abstract": false,
              "declare": false,
              "start": 28,
              "end": 46
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 21,
            "end": 46
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
                "start": 62,
                "end": 64
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
                      "start": 76,
                      "end": 87
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
                              "start": 92,
                              "end": 94
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Position",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 95,
                              "end": 103
                            },
                            "start": 92,
                            "end": 103
                          },
                          "typeArguments": null,
                          "start": 92,
                          "end": 103
                        },
                        "start": 90,
                        "end": 103
                      },
                      "body": null,
                      "expression": false,
                      "start": 87,
                      "end": 104
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 69,
                    "end": 104
                  }
                ],
                "start": 65,
                "end": 107
              },
              "abstract": false,
              "declare": false,
              "start": 56,
              "end": 107
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 49,
            "end": 107
          }
        ],
        "start": 18,
        "end": 109
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 109
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
                    "start": 117,
                    "end": 119
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Position",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 128
                  },
                  "start": 117,
                  "end": 128
                },
                "typeArguments": null,
                "start": 117,
                "end": 128
              },
              "start": 116,
              "end": 128
            },
            "start": 115,
            "end": 128
          },
          "init": null,
          "definite": false,
          "start": 115,
          "end": 128
        }
      ],
      "declare": false,
      "start": 111,
      "end": 129
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
                    "start": 137,
                    "end": 139
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 142
                  },
                  "start": 137,
                  "end": 142
                },
                "typeArguments": null,
                "start": 137,
                "end": 142
              },
              "start": 136,
              "end": 142
            },
            "start": 134,
            "end": 142
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
                "start": 149,
                "end": 151
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "EC",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 154
              },
              "optional": false,
              "computed": false,
              "start": 149,
              "end": 154
            },
            "typeArguments": null,
            "arguments": [],
            "start": 145,
            "end": 156
          },
          "definite": false,
          "start": 134,
          "end": 156
        }
      ],
      "declare": false,
      "start": 130,
      "end": 157
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
          "start": 159,
          "end": 160
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
              "start": 163,
              "end": 165
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getPosition",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 177
            },
            "optional": false,
            "computed": false,
            "start": 163,
            "end": 177
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 163,
          "end": 179
        },
        "start": 159,
        "end": 179
      },
      "directive": null,
      "start": 159,
      "end": 180
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 180
}
```

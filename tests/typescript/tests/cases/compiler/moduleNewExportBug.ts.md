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
        "name": "mod1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 29
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 43,
                          "end": 46
                        },
                        "start": 42,
                        "end": 46
                      },
                      "start": 39,
                      "end": 46
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 48,
                      "end": 51
                    },
                    "start": 47,
                    "end": 51
                  },
                  "start": 34,
                  "end": 52
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 64
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 70,
                          "end": 73
                        },
                        "start": 69,
                        "end": 73
                      },
                      "start": 66,
                      "end": 73
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 75,
                      "end": 78
                    },
                    "start": 74,
                    "end": 78
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 61,
                  "end": 79
                }
              ],
              "start": 30,
              "end": 82
            },
            "declare": false,
            "start": 15,
            "end": 82
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
              "start": 95,
              "end": 96
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
                    "name": "moo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 109
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
                      "body": [],
                      "start": 112,
                      "end": 114
                    },
                    "expression": false,
                    "start": 109,
                    "end": 114
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 99,
                  "end": 114
                }
              ],
              "start": 97,
              "end": 115
            },
            "abstract": false,
            "declare": false,
            "start": 89,
            "end": 115
          }
        ],
        "start": 12,
        "end": 117
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 117
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
            "name": "c",
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
                    "name": "mod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 131
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 133
                  },
                  "start": 127,
                  "end": 133
                },
                "typeArguments": null,
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "start": 123,
            "end": 133
          },
          "init": null,
          "definite": false,
          "start": 123,
          "end": 133
        }
      ],
      "declare": false,
      "start": 119,
      "end": 134
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```

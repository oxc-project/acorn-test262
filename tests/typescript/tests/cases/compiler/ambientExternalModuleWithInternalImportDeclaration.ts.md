__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "M",
        "raw": "'M'",
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 61,
                              "end": 67
                            },
                            "start": 59,
                            "end": 67
                          },
                          "start": 58,
                          "end": 67
                        },
                        "init": null,
                        "definite": false,
                        "start": 58,
                        "end": 67
                      }
                    ],
                    "declare": false,
                    "start": 54,
                    "end": 68
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 47,
                  "end": 68
                }
              ],
              "start": 37,
              "end": 74
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 25,
            "end": 74
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
              "start": 85,
              "end": 86
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 100
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
                        "type": "TSVoidKeyword",
                        "start": 104,
                        "end": 108
                      },
                      "start": 102,
                      "end": 108
                    },
                    "body": null,
                    "expression": false,
                    "start": 100,
                    "end": 109
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 97,
                  "end": 109
                }
              ],
              "start": 87,
              "end": 115
            },
            "abstract": false,
            "declare": false,
            "start": 79,
            "end": 115
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "importKind": "value",
            "start": 120,
            "end": 133
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 148
            },
            "start": 138,
            "end": 149
          }
        ],
        "start": 19,
        "end": 152
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 152
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 153
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 87
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "M",
          "raw": "'M'",
          "start": 98,
          "end": 101
        },
        "start": 90,
        "end": 102
      },
      "importKind": "value",
      "start": 79,
      "end": 103
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
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "typeArguments": null,
            "arguments": [],
            "start": 112,
            "end": 119
          },
          "definite": false,
          "start": 108,
          "end": 119
        }
      ],
      "declare": false,
      "start": 104,
      "end": 120
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 79,
  "end": 120
}
```

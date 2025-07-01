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
              "start": 32,
              "end": 33
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
                              "start": 58,
                              "end": 64
                            },
                            "start": 56,
                            "end": 64
                          },
                          "start": 55,
                          "end": 64
                        },
                        "init": null,
                        "definite": false,
                        "start": 55,
                        "end": 64
                      }
                    ],
                    "declare": false,
                    "start": 51,
                    "end": 65
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 44,
                  "end": 65
                }
              ],
              "start": 34,
              "end": 71
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 25,
            "end": 71
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
              "start": 82,
              "end": 83
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
                    "start": 94,
                    "end": 97
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
                        "start": 101,
                        "end": 105
                      },
                      "start": 99,
                      "end": 105
                    },
                    "body": null,
                    "expression": false,
                    "start": 97,
                    "end": 106
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 94,
                  "end": 106
                }
              ],
              "start": 84,
              "end": 112
            },
            "abstract": false,
            "declare": false,
            "start": 76,
            "end": 112
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 125
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "importKind": "value",
            "start": 117,
            "end": 130
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 145
            },
            "start": 135,
            "end": 146
          }
        ],
        "start": 19,
        "end": 149
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 149
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 150
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

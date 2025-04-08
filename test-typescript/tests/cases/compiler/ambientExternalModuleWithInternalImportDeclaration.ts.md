__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 149,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "M",
        "raw": "'M'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 149,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 25,
            "end": 71,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 34,
              "end": 71,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 44,
                  "end": 65,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 51,
                    "end": 65,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 55,
                        "end": 64,
                        "id": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 64,
                          "name": "f",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 56,
                            "end": 64,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 58,
                              "end": 64
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ClassDeclaration",
            "start": 76,
            "end": 112,
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 84,
              "end": 112,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 94,
                  "end": 106,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 97,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 97,
                    "end": 106,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 99,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 101,
                        "end": 105
                      }
                    }
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
            "type": "TSImportEqualsDeclaration",
            "start": 117,
            "end": 130,
            "id": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "TSExportAssignment",
            "start": 135,
            "end": 146,
            "expression": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 79,
  "end": 120,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 79,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 90,
        "end": 102,
        "expression": {
          "type": "Literal",
          "start": 98,
          "end": 101,
          "value": "M",
          "raw": "'M'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 112,
            "end": 119,
            "callee": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

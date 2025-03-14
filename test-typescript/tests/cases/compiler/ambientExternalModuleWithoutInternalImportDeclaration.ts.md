__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 131,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 131,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 25,
            "end": 71,
            "body": {
              "type": "TSModuleBlock",
              "start": 34,
              "end": 71,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 44,
                  "end": 65,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 51,
                    "end": 65,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 55,
                        "end": 64,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 64,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 56,
                            "end": 64,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 58,
                              "end": 64
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "ClassDeclaration",
            "start": 76,
            "end": 112,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 84,
              "end": 112,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 94,
                  "end": 106,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 97,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 97,
                    "end": 106,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
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
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSExportAssignment",
            "start": 117,
            "end": 128,
            "expression": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "'M'",
        "value": "M"
      }
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
  "start": 82,
  "end": 123,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 82,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 93,
        "end": 105,
        "expression": {
          "type": "Literal",
          "start": 101,
          "end": 104,
          "raw": "'M'",
          "value": "M"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 115,
            "end": 122,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 183,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 182,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 182,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 33,
            "end": 156,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 49,
              "end": 156,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 59,
                  "end": 91,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 82,
                    "decorators": [],
                    "name": "StaticVar",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 84,
                      "end": 90
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 100,
                  "end": 127,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 118,
                    "decorators": [],
                    "name": "InstanceVar",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 118,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 120,
                      "end": 126
                    }
                  },
                  "value": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 136,
                  "end": 150,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 147,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 147,
                    "end": 150,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 48,
              "decorators": [],
              "name": "SubModule",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSExportAssignment",
            "start": 161,
            "end": 180,
            "expression": {
              "type": "Identifier",
              "start": 170,
              "end": 179,
              "decorators": [],
              "name": "SubModule",
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
        "end": 26,
        "raw": "\"SubModule\"",
        "value": "SubModule"
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
  "start": 76,
  "end": 258,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 76,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 92,
        "decorators": [],
        "name": "SubModule",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 95,
        "end": 115,
        "expression": {
          "type": "Literal",
          "start": 103,
          "end": 114,
          "raw": "'SubModule'",
          "value": "SubModule"
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 117,
      "end": 235,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 134,
        "end": 235,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 183,
            "end": 211,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 199,
              "decorators": [],
              "name": "SubModule",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 210,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 210,
                  "decorators": [],
                  "name": "SubModule",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 233,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 227,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 227,
              "end": 233,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 230,
                "end": 233,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 133,
        "decorators": [],
        "name": "MainModule",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSExportAssignment",
      "start": 236,
      "end": 256,
      "expression": {
        "type": "Identifier",
        "start": 245,
        "end": 255,
        "decorators": [],
        "name": "MainModule",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 248,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 29,
        "end": 248,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 35,
            "end": 70,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 44,
              "decorators": [],
              "name": "m2",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 47,
              "end": 69,
              "expression": {
                "type": "Literal",
                "start": 55,
                "end": 68,
                "raw": "\"./SubModule\"",
                "value": "./SubModule"
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 75,
            "end": 222,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 91,
              "end": 222,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 101,
                  "end": 133,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 124,
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
                    "start": 124,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 126,
                      "end": 132
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 142,
                  "end": 169,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 160,
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
                    "start": 160,
                    "end": 168,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 162,
                      "end": 168
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 178,
                  "end": 193,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 186,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 186,
                    "end": 192,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 188,
                      "end": 192,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 188,
                        "end": 192,
                        "left": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 190,
                          "decorators": [],
                          "name": "m2",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 192,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      }
                    }
                  },
                  "value": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 202,
                  "end": 216,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 213,
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
                    "start": 213,
                    "end": 216,
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
              "start": 81,
              "end": 90,
              "decorators": [],
              "name": "SubModule",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSExportAssignment",
            "start": 227,
            "end": 246,
            "expression": {
              "type": "Identifier",
              "start": 236,
              "end": 245,
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
        "end": 28,
        "raw": "\"OuterModule\"",
        "value": "OuterModule"
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

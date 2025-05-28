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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 28,
        "value": "OuterModule",
        "raw": "\"OuterModule\""
      },
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
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 47,
              "end": 69,
              "expression": {
                "type": "Literal",
                "start": 55,
                "end": 68,
                "value": "./SubModule",
                "raw": "\"./SubModule\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 75,
            "end": 222,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 81,
              "end": 90,
              "decorators": [],
              "name": "SubModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 91,
              "end": 222,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 101,
                  "end": 133,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 124,
                    "decorators": [],
                    "name": "StaticVar",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 142,
                  "end": 169,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 160,
                    "decorators": [],
                    "name": "InstanceVar",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 178,
                  "end": 193,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 186,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 192,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 202,
                  "end": 216,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 213,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 213,
                    "end": 216,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

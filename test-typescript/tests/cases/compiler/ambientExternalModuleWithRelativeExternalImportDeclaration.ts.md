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
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 81,
              "end": 90,
              "name": "SubModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 91,
              "end": 222,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 101,
                  "end": 133,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 124,
                    "name": "StaticVar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 142,
                  "end": 169,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 160,
                    "name": "InstanceVar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 178,
                  "end": 193,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 186,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                          "name": "m2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 192,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 202,
                  "end": 216,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 213,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 213,
                    "end": 216,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
            "type": "TSExportAssignment",
            "start": 227,
            "end": 246,
            "expression": {
              "type": "Identifier",
              "start": 236,
              "end": 245,
              "name": "SubModule",
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
  "sourceType": "script",
  "hashbang": null
}
```

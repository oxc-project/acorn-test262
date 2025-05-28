__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 336,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 70,
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 71,
        "end": 74,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 99,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 98,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 98,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 98,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 95,
                "end": 98
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 336,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 129,
        "decorators": [],
        "name": "BulkEditPreviewProvider",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 336,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 136,
            "end": 186,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 158,
              "decorators": [],
              "name": "Schema",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 161,
              "end": 185,
              "value": "vscode-bulkeditpreview",
              "raw": "'vscode-bulkeditpreview'"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 191,
            "end": 256,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 210,
              "decorators": [],
              "name": "emptyPreview",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 213,
              "end": 255,
              "properties": [
                {
                  "type": "Property",
                  "start": 215,
                  "end": 253,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 221,
                    "decorators": [],
                    "name": "scheme",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 223,
                    "end": 253,
                    "object": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 246,
                      "decorators": [],
                      "name": "BulkEditPreviewProvider",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 253,
                      "decorators": [],
                      "name": "Schema",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 261,
            "end": 334,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 272,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 272,
              "end": 334,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 282,
                  "end": 323,
                  "accessibility": "private",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 282,
                      "end": 287,
                      "expression": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 287,
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 305,
                    "end": 323,
                    "decorators": [],
                    "name": "_modeService",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 317,
                      "end": 323,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 319,
                        "end": 323,
                        "typeName": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 323,
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 331,
                "end": 334,
                "body": []
              },
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

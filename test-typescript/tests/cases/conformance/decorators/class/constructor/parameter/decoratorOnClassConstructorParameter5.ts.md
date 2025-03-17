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
        "name": "IFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 98,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 98,
            "name": "IFoo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 98,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 95,
                "end": 98
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 336,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 129,
        "name": "BulkEditPreviewProvider",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 336,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 136,
            "end": 186,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 158,
              "name": "Schema",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 161,
              "end": 185,
              "value": "vscode-bulkeditpreview",
              "raw": "'vscode-bulkeditpreview'"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 191,
            "end": 256,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 210,
              "name": "emptyPreview",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 213,
              "end": 255,
              "properties": [
                {
                  "type": "Property",
                  "start": 215,
                  "end": 253,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 221,
                    "name": "scheme",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 223,
                    "end": 253,
                    "object": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 246,
                      "name": "BulkEditPreviewProvider",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 253,
                      "name": "Schema",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 261,
            "end": 334,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 272,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 272,
              "end": 334,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                        "name": "IFoo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 305,
                    "end": 323,
                    "name": "_modeService",
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
                          "name": "IFoo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 331,
                "end": 334,
                "body": []
              },
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

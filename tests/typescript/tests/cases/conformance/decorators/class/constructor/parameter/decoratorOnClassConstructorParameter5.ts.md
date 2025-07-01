__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 70
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 71,
        "end": 74
      },
      "declare": false,
      "start": 56,
      "end": 74
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 95,
                "end": 98
              },
              "start": 93,
              "end": 98
            },
            "start": 89,
            "end": 98
          },
          "init": null,
          "definite": false,
          "start": 89,
          "end": 98
        }
      ],
      "declare": true,
      "start": 75,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BulkEditPreviewProvider",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 129
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Schema",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 158
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "vscode-bulkeditpreview",
              "raw": "'vscode-bulkeditpreview'",
              "start": 161,
              "end": 185
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 136,
            "end": 186
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "emptyPreview",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 210
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "scheme",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 221
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BulkEditPreviewProvider",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 246
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Schema",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 253
                    },
                    "optional": false,
                    "computed": false,
                    "start": 223,
                    "end": 253
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 215,
                  "end": 253
                }
              ],
              "start": 213,
              "end": 255
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 191,
            "end": 256
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 272
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 287
                      },
                      "start": 282,
                      "end": 287
                    }
                  ],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_modeService",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 319,
                          "end": 323
                        },
                        "typeArguments": null,
                        "start": 319,
                        "end": 323
                      },
                      "start": 317,
                      "end": 323
                    },
                    "start": 305,
                    "end": 323
                  },
                  "readonly": true,
                  "static": false,
                  "start": 282,
                  "end": 323
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 331,
                "end": 334
              },
              "expression": false,
              "start": 272,
              "end": 334
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 261,
            "end": 334
          }
        ],
        "start": 130,
        "end": 336
      },
      "abstract": false,
      "declare": false,
      "start": 100,
      "end": 336
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 336
}
```

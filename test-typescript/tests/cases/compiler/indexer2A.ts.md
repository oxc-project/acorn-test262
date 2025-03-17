__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 256,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 25,
        "name": "IHeapObjectProperty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 29,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 54,
        "name": "IDirectChildrenMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 118,
            "end": 159,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 132,
              "name": "hasOwnProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 132,
              "end": 159,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 133,
                  "end": 149,
                  "name": "objectId",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 141,
                    "end": 149,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 143,
                      "end": 149
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 150,
                "end": 159,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 152,
                  "end": 159
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 164,
            "end": 205,
            "parameters": [
              {
                "type": "Identifier",
                "start": 165,
                "end": 181,
                "name": "objectId",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 173,
                  "end": 181,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 175,
                    "end": 181
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 205,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 184,
                "end": 205,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 184,
                  "end": 203,
                  "typeName": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 203,
                    "name": "IHeapObjectProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "readonly": false,
            "static": false,
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
      "type": "VariableDeclaration",
      "start": 208,
      "end": 255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 254,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 229,
            "name": "directChildrenMap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 232,
            "end": 254,
            "expression": {
              "type": "ObjectExpression",
              "start": 252,
              "end": 254,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 233,
              "end": 251,
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 251,
                "name": "IDirectChildrenMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

indexer2A.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 29,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 25,
        "decorators": [],
        "name": "IHeapObjectProperty",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 207,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 118,
            "end": 159,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 132,
              "decorators": [],
              "name": "hasOwnProperty",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 132,
              "end": 159,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 133,
                  "end": 149,
                  "decorators": [],
                  "name": "objectId",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 141,
                    "end": 149,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 143,
                      "end": 149
                    }
                  }
                }
              ],
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
            }
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
                "decorators": [],
                "name": "objectId",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 173,
                  "end": 181,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 175,
                    "end": 181
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
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
                    "decorators": [],
                    "name": "IHeapObjectProperty",
                    "optional": false
                  }
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
        "start": 36,
        "end": 54,
        "decorators": [],
        "name": "IDirectChildrenMap",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 229,
            "decorators": [],
            "name": "directChildrenMap",
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
                "decorators": [],
                "name": "IDirectChildrenMap",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```

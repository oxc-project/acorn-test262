__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 198,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "Message",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 34,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 25,
              "name": "value",
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
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
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
      "type": "FunctionDeclaration",
      "start": 38,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 54,
        "name": "saySize",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 55,
          "end": 83,
          "name": "message",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 83,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 64,
              "end": 83,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 64,
                  "end": 71,
                  "typeName": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 71,
                    "name": "Message",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSArrayType",
                  "start": 74,
                  "end": 83,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 74,
                    "end": 81,
                    "typeName": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 81,
                      "name": "Message",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 197,
        "body": [
          {
            "type": "IfStatement",
            "start": 91,
            "end": 195,
            "test": {
              "type": "BinaryExpression",
              "start": 95,
              "end": 119,
              "left": {
                "type": "Identifier",
                "start": 95,
                "end": 102,
                "name": "message",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 114,
                "end": 119,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 121,
              "end": 195,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 131,
                  "end": 153,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 138,
                    "end": 152,
                    "object": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 145,
                      "name": "message",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 152,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

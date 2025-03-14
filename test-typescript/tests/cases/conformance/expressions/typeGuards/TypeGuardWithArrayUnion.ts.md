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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 34,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 25,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Message",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 38,
      "end": 197,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 197,
        "body": [
          {
            "type": "IfStatement",
            "start": 91,
            "end": 195,
            "alternate": null,
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
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 145,
                      "decorators": [],
                      "name": "message",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 152,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 95,
              "end": 119,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 95,
                "end": 102,
                "decorators": [],
                "name": "message",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 114,
                "end": 119,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 54,
        "decorators": [],
        "name": "saySize",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 55,
          "end": 83,
          "decorators": [],
          "name": "message",
          "optional": false,
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
                    "decorators": [],
                    "name": "Message",
                    "optional": false
                  }
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
                      "decorators": [],
                      "name": "Message",
                      "optional": false
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

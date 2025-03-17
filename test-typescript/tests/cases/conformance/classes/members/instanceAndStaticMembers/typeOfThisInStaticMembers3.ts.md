__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 162,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 56,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 27,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "value": 1,
              "raw": "1"
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
            "type": "PropertyDefinition",
            "start": 32,
            "end": 54,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "BinaryExpression",
              "start": 43,
              "end": 53,
              "left": {
                "type": "MemberExpression",
                "start": 43,
                "end": 49,
                "object": {
                  "type": "ThisExpression",
                  "start": 43,
                  "end": 47
                },
                "property": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 52,
                "end": 53,
                "value": 1,
                "raw": "1"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "ClassDeclaration",
      "start": 58,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 161,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 82,
            "end": 95,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 93,
              "end": 94,
              "value": 2,
              "raw": "2"
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
            "type": "PropertyDefinition",
            "start": 100,
            "end": 122,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "BinaryExpression",
              "start": 111,
              "end": 121,
              "left": {
                "type": "MemberExpression",
                "start": 111,
                "end": 117,
                "object": {
                  "type": "ThisExpression",
                  "start": 111,
                  "end": 115
                },
                "property": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 120,
                "end": 121,
                "value": 1,
                "raw": "1"
              }
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
            "type": "PropertyDefinition",
            "start": 127,
            "end": 159,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "BinaryExpression",
              "start": 138,
              "end": 158,
              "left": {
                "type": "BinaryExpression",
                "start": 138,
                "end": 154,
                "left": {
                  "type": "MemberExpression",
                  "start": 138,
                  "end": 145,
                  "object": {
                    "type": "Super",
                    "start": 138,
                    "end": 143
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "start": 148,
                  "end": 154,
                  "object": {
                    "type": "ThisExpression",
                    "start": 148,
                    "end": 152
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 157,
                "end": 158,
                "value": 1,
                "raw": "1"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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

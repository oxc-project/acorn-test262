__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 187,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "name": "field3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 38,
            "end": 46,
            "value": "field3",
            "raw": "\"field3\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 186,
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 72,
            "end": 104,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 95,
              "name": "field1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 72,
                "end": 79,
                "expression": {
                  "type": "CallExpression",
                  "start": 73,
                  "end": 79,
                  "callee": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 76,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 77,
                      "end": 78,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 97,
                "end": 103
              }
            },
            "accessibility": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 109,
            "end": 145,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 127,
              "end": 135,
              "value": "field2",
              "raw": "\"field2\""
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 109,
                "end": 116,
                "expression": {
                  "type": "CallExpression",
                  "start": 110,
                  "end": 116,
                  "callee": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 113,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 114,
                      "end": 115,
                      "value": 2,
                      "raw": "2"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 144,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 138,
                "end": 144
              }
            },
            "accessibility": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 150,
            "end": 184,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 174,
              "name": "field3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 150,
                "end": 157,
                "expression": {
                  "type": "CallExpression",
                  "start": 151,
                  "end": 157,
                  "callee": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 154,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 155,
                      "end": 156,
                      "value": 3,
                      "raw": "3"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 183,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 177,
                "end": 183
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

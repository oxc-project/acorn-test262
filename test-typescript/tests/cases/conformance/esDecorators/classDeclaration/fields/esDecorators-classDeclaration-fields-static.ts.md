__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
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
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 159,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 89,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 84,
              "name": "field1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 87,
              "end": 88,
              "value": 1,
              "raw": "1"
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 63,
                "end": 70,
                "expression": {
                  "type": "CallExpression",
                  "start": 64,
                  "end": 70,
                  "callee": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 67,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 68,
                      "end": 69,
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
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 94,
            "end": 124,
            "static": true,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 110,
              "end": 118,
              "value": "field2",
              "raw": "\"field2\""
            },
            "value": {
              "type": "Literal",
              "start": 122,
              "end": 123,
              "value": 2,
              "raw": "2"
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 94,
                "end": 101,
                "expression": {
                  "type": "CallExpression",
                  "start": 95,
                  "end": 101,
                  "callee": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 98,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 99,
                      "end": 100,
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
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 129,
            "end": 157,
            "static": true,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 151,
              "name": "field3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 155,
              "end": 156,
              "value": 3,
              "raw": "3"
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 129,
                "end": 136,
                "expression": {
                  "type": "CallExpression",
                  "start": 130,
                  "end": 136,
                  "callee": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 133,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 134,
                      "end": 135,
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

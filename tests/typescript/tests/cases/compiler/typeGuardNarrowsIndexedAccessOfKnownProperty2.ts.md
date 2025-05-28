__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 128,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 27,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 11,
                "end": 27,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 13,
                    "end": 25,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13,
                      "end": 16,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 17,
                      "end": 25,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 19,
                        "end": 25
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 30,
            "end": 32,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 61,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 46,
            "end": 60,
            "expression": {
              "type": "Literal",
              "start": 46,
              "end": 51,
              "value": "key",
              "raw": "'key'"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 55,
              "end": 60,
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 60,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 63,
      "end": 128,
      "test": {
        "type": "MemberExpression",
        "start": 67,
        "end": 75,
        "object": {
          "type": "Identifier",
          "start": 67,
          "end": 70,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 71,
          "end": 74,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 77,
        "end": 128,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 92,
            "expression": {
              "type": "MemberExpression",
              "start": 83,
              "end": 91,
              "object": {
                "type": "Identifier",
                "start": 83,
                "end": 86,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 87,
                "end": 90,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 107,
            "end": 115,
            "expression": {
              "type": "MemberExpression",
              "start": 107,
              "end": 114,
              "object": {
                "type": "Identifier",
                "start": 107,
                "end": 110,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 111,
                "end": 114,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

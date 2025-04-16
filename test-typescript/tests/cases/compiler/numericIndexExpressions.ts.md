__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 216,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "name": "Numbers1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 37,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 35,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 56,
        "name": "Strings1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 77,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 75,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 63,
              "end": 66,
              "value": "1",
              "raw": "'1'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 74,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 68,
                "end": 74
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 97,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 97,
                  "name": "Numbers1",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 108,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 107,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 99,
          "end": 103,
          "object": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 101,
            "end": 102,
            "value": 1,
            "raw": "1"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 106,
          "end": 107,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 129,
      "expression": {
        "type": "AssignmentExpression",
        "start": 118,
        "end": 128,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 118,
          "end": 124,
          "object": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 120,
            "end": 123,
            "value": "1",
            "raw": "'1'"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 127,
          "end": 128,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 155,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 155,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 155,
                  "name": "Strings1",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 168,
      "expression": {
        "type": "AssignmentExpression",
        "start": 157,
        "end": 167,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 157,
          "end": 163,
          "object": {
            "type": "Identifier",
            "start": 157,
            "end": 158,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 159,
            "end": 162,
            "value": "1",
            "raw": "'1'"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 166,
          "end": 167,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 197,
      "expression": {
        "type": "AssignmentExpression",
        "start": 188,
        "end": 196,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 188,
          "end": 192,
          "object": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 190,
            "end": 191,
            "value": 1,
            "raw": "1"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 195,
          "end": 196,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

typeofClass.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 52,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 50,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
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
        "end": 7,
        "decorators": [],
        "name": "K",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 63,
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 63,
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 72,
      "expression": {
        "type": "MemberExpression",
        "start": 65,
        "end": 71,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 65,
          "end": 67,
          "decorators": [],
          "name": "k1",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 68,
          "end": 71,
          "decorators": [],
          "name": "foo",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 80,
      "expression": {
        "type": "MemberExpression",
        "start": 73,
        "end": 79,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 73,
          "end": 75,
          "decorators": [],
          "name": "k1",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 76,
          "end": 79,
          "decorators": [],
          "name": "bar",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 97,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 97,
            "decorators": [],
            "name": "k2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 89,
                "end": 97,
                "exprName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 106,
      "expression": {
        "type": "MemberExpression",
        "start": 99,
        "end": 105,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 99,
          "end": 101,
          "decorators": [],
          "name": "k2",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 102,
          "end": 105,
          "decorators": [],
          "name": "foo",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 114,
      "expression": {
        "type": "MemberExpression",
        "start": 107,
        "end": 113,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 107,
          "end": 109,
          "decorators": [],
          "name": "k2",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 110,
          "end": 113,
          "decorators": [],
          "name": "bar",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```

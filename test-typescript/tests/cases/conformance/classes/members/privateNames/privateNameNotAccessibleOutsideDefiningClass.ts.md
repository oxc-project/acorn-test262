__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 31,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
              }
            },
            "value": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "raw": "3",
              "value": 3
            }
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
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 52,
      "expression": {
        "type": "AssignmentExpression",
        "start": 35,
        "end": 51,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 35,
          "end": 47,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 35,
            "end": 42,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "PrivateIdentifier",
            "start": 43,
            "end": 47,
            "name": "foo"
          }
        },
        "right": {
          "type": "Literal",
          "start": 50,
          "end": 51,
          "raw": "4",
          "value": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

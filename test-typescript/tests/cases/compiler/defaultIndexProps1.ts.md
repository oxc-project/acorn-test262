defaultIndexProps1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 31,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 31,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 29,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 24,
              "end": 28,
              "raw": "\"Yo\"",
              "value": "Yo"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 41,
            "end": 50,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 45,
              "end": 48,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "q",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 61,
            "end": 67,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 63,
              "end": 66,
              "raw": "\"v\"",
              "value": "v"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 78,
            "end": 87,
            "properties": [
              {
                "type": "Property",
                "start": 79,
                "end": 86,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 81,
                  "end": 86,
                  "raw": "\"Yo2\"",
                  "value": "Yo2"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 96,
            "decorators": [],
            "name": "q2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 99,
            "end": 105,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "o",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 101,
              "end": 104,
              "raw": "\"v\"",
              "value": "v"
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

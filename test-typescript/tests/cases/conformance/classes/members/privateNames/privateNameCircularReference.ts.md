__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 130,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 130,
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
            "value": {
              "type": "MemberExpression",
              "start": 21,
              "end": 30,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 21,
                "end": 25
              },
              "optional": false,
              "property": {
                "type": "PrivateIdentifier",
                "start": 26,
                "end": 30,
                "name": "bar"
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 53,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 36,
              "end": 40,
              "name": "bar"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 43,
              "end": 52,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 43,
                "end": 47
              },
              "optional": false,
              "property": {
                "type": "PrivateIdentifier",
                "start": 48,
                "end": 52,
                "name": "foo"
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 82,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 59,
              "end": 65,
              "raw": "\"#baz\"",
              "value": "#baz"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 69,
              "end": 81,
              "computed": true,
              "object": {
                "type": "ThisExpression",
                "start": 69,
                "end": 73
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 74,
                "end": 80,
                "raw": "\"#baz\"",
                "value": "#baz"
              }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

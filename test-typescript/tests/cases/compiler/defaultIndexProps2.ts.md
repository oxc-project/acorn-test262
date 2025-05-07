__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 142,
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
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 24,
              "end": 28,
              "raw": "\"Yo\"",
              "value": "Yo",
              "regex": null,
              "bigint": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
            "optional": false,
            "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 85,
            "end": 94,
            "properties": [
              {
                "type": "Property",
                "start": 86,
                "end": 93,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 88,
                  "end": 93,
                  "raw": "\"Yo2\"",
                  "value": "Yo2",
                  "regex": null,
                  "bigint": null
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
      "type": "ExpressionStatement",
      "start": 121,
      "end": 126,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 121,
        "end": 125,
        "computed": true,
        "object": {
          "type": "Literal",
          "start": 121,
          "end": 122,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 123,
          "end": 124,
          "raw": "0",
          "value": 0,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 135,
            "end": 141,
            "computed": true,
            "object": {
              "type": "Literal",
              "start": 135,
              "end": 138,
              "raw": "\"s\"",
              "value": "s",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 139,
              "end": 140,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

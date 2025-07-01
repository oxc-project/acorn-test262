__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "Yo",
              "raw": "\"Yo\"",
              "start": 24,
              "end": 28
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 13,
            "end": 29
          }
        ],
        "start": 10,
        "end": 31
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 48
            },
            "typeArguments": null,
            "arguments": [],
            "start": 41,
            "end": 50
          },
          "definite": false,
          "start": 37,
          "end": 50
        }
      ],
      "declare": false,
      "start": 33,
      "end": 51
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 87
                },
                "value": {
                  "type": "Literal",
                  "value": "Yo2",
                  "raw": "\"Yo2\"",
                  "start": 88,
                  "end": 93
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 86,
                "end": 93
              }
            ],
            "start": 85,
            "end": 94
          },
          "definite": false,
          "start": 81,
          "end": 94
        }
      ],
      "declare": false,
      "start": 77,
      "end": 95
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 121,
          "end": 122
        },
        "property": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 123,
          "end": 124
        },
        "optional": false,
        "computed": true,
        "start": 121,
        "end": 125
      },
      "directive": null,
      "start": 121,
      "end": 126
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 132
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 135,
              "end": 138
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 139,
              "end": 140
            },
            "optional": false,
            "computed": true,
            "start": 135,
            "end": 141
          },
          "definite": false,
          "start": 131,
          "end": 141
        }
      ],
      "declare": false,
      "start": 127,
      "end": 142
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 142
}
```

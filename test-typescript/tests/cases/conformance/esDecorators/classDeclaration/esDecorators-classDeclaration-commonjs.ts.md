__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "decorators": [],
            "name": "deco",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 21,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 74,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 37,
        "end": 74,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 51,
          "end": 74,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 57,
              "end": 72,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 67,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 67,
                "end": 72,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 70,
                  "end": 72,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 24,
            "end": 29,
            "expression": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "deco",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 50,
          "decorators": [],
          "name": "Example",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 90,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 89,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 76,
          "end": 87,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 76,
            "end": 83,
            "decorators": [],
            "name": "Example",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 84,
            "end": 87,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

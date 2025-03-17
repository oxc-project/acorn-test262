__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 35,
            "properties": [
              {
                "type": "Property",
                "start": 12,
                "end": 33,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 13,
                  "end": 27,
                  "object": {
                    "type": "Identifier",
                    "start": 13,
                    "end": 19,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 27,
                    "name": "dispose",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 28,
                  "end": 33,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 31,
                    "end": 33,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "using",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 48,
            "end": 49,
            "value": 2,
            "raw": "2"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 52,
      "end": 70,
      "expression": {
        "type": "CallExpression",
        "start": 52,
        "end": 69,
        "callee": {
          "type": "MemberExpression",
          "start": 52,
          "end": 63,
          "object": {
            "type": "Identifier",
            "start": 52,
            "end": 59,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSExportAssignment",
      "start": 71,
      "end": 82,
      "expression": {
        "type": "Literal",
        "start": 80,
        "end": 81,
        "value": 4,
        "raw": "4"
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

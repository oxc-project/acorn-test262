globalIsContextualKeyword.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 162,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 36,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 36,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 34,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 33,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 29,
                  "decorators": [],
                  "name": "global",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 32,
                  "end": 33,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 73,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 73,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 56,
            "end": 71,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 69,
              "end": 71,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 68,
              "decorators": [],
              "name": "global",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 75,
      "end": 95,
      "body": {
        "type": "TSModuleBlock",
        "start": 92,
        "end": 95,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 91,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "FunctionDeclaration",
      "start": 97,
      "end": 129,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 129,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 109,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 110,
          "end": 124,
          "decorators": [],
          "name": "global",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 116,
            "end": 124,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 118,
              "end": 124
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 138,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 141,
            "end": 162,
            "properties": [
              {
                "type": "Property",
                "start": 147,
                "end": 160,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 153,
                  "decorators": [],
                  "name": "global",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 155,
                  "end": 160,
                  "raw": "\"123\"",
                  "value": "123"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```

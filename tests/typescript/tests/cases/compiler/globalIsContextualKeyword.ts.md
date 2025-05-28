__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 36,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 34,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 33,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 29,
                  "decorators": [],
                  "name": "global",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 32,
                  "end": 33,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 73,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 56,
            "end": 71,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 68,
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 69,
              "end": 71,
              "body": []
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 75,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 91,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 92,
        "end": 95,
        "body": []
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 97,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 109,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 129,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 162,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 138,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 153,
                  "decorators": [],
                  "name": "global",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 155,
                  "end": 160,
                  "value": "123",
                  "raw": "\"123\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 232,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 178,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 30,
        "end": 178,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 39,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 40,
          "end": 178,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 99,
              "end": 116,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 99,
                "end": 110,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 110,
                "end": 116,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 113,
                  "end": 116,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 162,
              "end": 176,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 162,
                "end": 165,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 165,
                "end": 176,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 166,
                    "end": 171,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 173,
                  "end": 176,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 215,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 214,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 232,
      "expression": {
        "type": "AssignmentExpression",
        "start": 216,
        "end": 231,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 216,
          "end": 219,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 222,
          "end": 231,
          "callee": {
            "type": "Identifier",
            "start": 226,
            "end": 229,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

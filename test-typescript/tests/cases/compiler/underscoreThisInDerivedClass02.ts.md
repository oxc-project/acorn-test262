__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 143,
  "end": 295,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 143,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 150,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 151,
        "end": 199,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 157,
            "end": 197,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 168,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 168,
              "end": 197,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 171,
                "end": 197,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 181,
                    "end": 191,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 188,
                      "end": 190,
                      "properties": []
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 201,
      "end": 295,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 208,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 217,
        "end": 218,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 219,
        "end": 295,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 225,
            "end": 293,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 225,
              "end": 236,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 236,
              "end": 293,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 239,
                "end": 293,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 249,
                    "end": 257,
                    "expression": {
                      "type": "CallExpression",
                      "start": 249,
                      "end": 256,
                      "callee": {
                        "type": "Super",
                        "start": 249,
                        "end": 254
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 266,
                    "end": 287,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 270,
                        "end": 286,
                        "id": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 275,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 278,
                          "end": 286,
                          "value": "uh-oh?",
                          "raw": "\"uh-oh?\""
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

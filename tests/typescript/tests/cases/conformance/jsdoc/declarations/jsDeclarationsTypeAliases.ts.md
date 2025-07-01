__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 357
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doTheThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 152
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 154
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 171
                  },
                  "value": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 173,
                      "end": 175
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 177
                    },
                    "start": 173,
                    "end": 177
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 170,
                  "end": 177
                }
              ],
              "start": 169,
              "end": 178
            },
            "start": 162,
            "end": 179
          }
        ],
        "start": 156,
        "end": 181
      },
      "expression": false,
      "start": 133,
      "end": 181
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExportedThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 201
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
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 209
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "ok",
              "raw": "\"ok\"",
              "start": 212,
              "end": 216
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 208,
            "end": 216
          }
        ],
        "start": 202,
        "end": 218
      },
      "abstract": false,
      "declare": false,
      "start": 182,
      "end": 218
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 225
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 233
          },
          "optional": false,
          "computed": false,
          "start": 219,
          "end": 233
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "doTheThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 252
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "doTheThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 252
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 242,
              "end": 252
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExportedThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 271
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExportedThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 271
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 258,
              "end": 271
            }
          ],
          "start": 236,
          "end": 274
        },
        "start": 219,
        "end": 274
      },
      "directive": null,
      "start": 219,
      "end": 275
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LocalThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 292
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 300
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "ok",
              "raw": "\"ok\"",
              "start": 303,
              "end": 307
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 299,
            "end": 307
          }
        ],
        "start": 293,
        "end": 309
      },
      "abstract": false,
      "declare": false,
      "start": 276,
      "end": 309
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 133,
  "end": 309
}
```
